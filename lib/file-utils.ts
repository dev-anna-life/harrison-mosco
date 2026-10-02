/**
 * Browser-native file encoding utilities for lead attachments
 */

export interface UploadedFileItem {
  filename: string;
  contentType: string;
  base64: string;
  label?: string;
  size?: number;
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

export async function processFileInput(
  files: FileList | null,
  label: string
): Promise<UploadedFileItem[]> {
  if (!files || files.length === 0) return [];
  const results: UploadedFileItem[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    // Maximum 5MB per individual attachment for email reliability
    if (file.size > 5 * 1024 * 1024) {
      throw new Error(`File "${file.name}" exceeds 5MB size limit.`);
    }
    const base64 = await fileToBase64(file);
    results.push({
      filename: file.name,
      contentType: file.type || "application/octet-stream",
      base64,
      label,
      size: file.size,
    });
  }

  return results;
}
