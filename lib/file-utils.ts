/**
 * Browser-native file encoding and image compression utilities for lead attachments
 */

export interface UploadedFileItem {
  filename: string;
  contentType: string;
  base64: string;
  label?: string;
  size?: number;
}

export function compressImageFile(
  file: File,
  maxWidth = 1280,
  maxHeight = 1280,
  quality = 0.82
): Promise<{ base64: string; size: number; contentType: string }> {
  return new Promise((resolve, reject) => {
    // If not an image, resolve with standard FileReader
    if (!file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        resolve({ base64, size: file.size, contentType: file.type || "application/octet-stream" });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
      return;
    }

    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;

    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > maxWidth || height > maxHeight) {
        if (width > height) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        } else {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        const rawBase64 = img.src;
        resolve({ base64: rawBase64, size: file.size, contentType: file.type });
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);
      const mime = "image/jpeg";
      const compressedDataUrl = canvas.toDataURL(mime, quality);

      const stringLength = compressedDataUrl.length - "data:image/jpeg;base64,".length;
      const sizeInBytes = Math.ceil((stringLength * 3) / 4);

      resolve({
        base64: compressedDataUrl,
        size: sizeInBytes,
        contentType: mime,
      });
    };

    img.onerror = () => {
      const fallbackReader = new FileReader();
      fallbackReader.onload = () => {
        resolve({ base64: fallbackReader.result as string, size: file.size, contentType: file.type });
      };
      fallbackReader.onerror = reject;
      fallbackReader.readAsDataURL(file);
    };

    reader.readAsDataURL(file);
  });
}

export function fileToBase64(file: File): Promise<string> {
  return compressImageFile(file).then((res) => res.base64);
}

export async function processFileInput(
  files: FileList | null,
  label: string
): Promise<UploadedFileItem[]> {
  if (!files || files.length === 0) return [];
  const results: UploadedFileItem[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.size > 20 * 1024 * 1024) {
      throw new Error(`File "${file.name}" exceeds 20MB limit. Please upload a smaller document.`);
    }
    const { base64, size, contentType } = await compressImageFile(file);
    const ext = file.name.substring(file.name.lastIndexOf("."));
    const baseName = file.name.substring(0, file.name.lastIndexOf(".")) || file.name;
    const finalName = contentType === "image/jpeg" && !file.name.toLowerCase().endsWith(".jpg") && !file.name.toLowerCase().endsWith(".jpeg")
      ? `${baseName}.jpg`
      : file.name;

    results.push({
      filename: finalName,
      contentType,
      base64,
      label,
      size,
    });
  }

  return results;
}
