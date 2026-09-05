// =========================================================
// SERVER DATABASE CONNECTOR WITH RESILIENT DATA STORE
// =========================================================

// In-memory / Real-time persistent data store for orders, leads, and tracking
export interface MemoryLead {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  proposedName?: string;
  interestedPackage: string;
  estimatedBudget: number;
  source: string;
  createdAt: string;
}

export interface MemoryDirector {
  firstName: string;
  surname: string;
  otherNames?: string;
  dob?: string;
  gender?: string;
  sharePercentage: number;
  email: string;
  phoneCountryCode?: string;
  phone: string;
  state?: string;
  lga?: string;
  stateOfResidence?: string;
  lgaOfResidence?: string;
  city?: string;
  cityOfResidence?: string;
  address?: string;
  residentialAddress?: string;
  idType?: string;
  idNumber?: string;
  identificationNumber?: string;
  idDocumentUrl?: string;
  signatureUrl?: string;
  passportPhotoUrl?: string;
}

export interface MemoryOrder {
  id: string;
  reference: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  isOutsourcing: boolean;
  proposedName1: string;
  proposedName2: string;
  packageType: string;
  shareCapitalMillions: number;
  totalAmount: number;
  status: string;
  directors: MemoryDirector[];
  createdAt: string;
}

const mockLeads: MemoryLead[] = [
  {
    id: "lead-1",
    fullName: "Chukwudi Nnamdi",
    phone: "+2348031234567",
    email: "chukwudi@example.com",
    proposedName: "Apex Logistics Ltd",
    interestedPackage: "Pro",
    estimatedBudget: 100000,
    source: "launch-simulator",
    createdAt: new Date().toISOString(),
  },
  {
    id: "lead-2",
    fullName: "Amina Bello",
    phone: "+2348149876543",
    email: "amina@example.com",
    proposedName: "Northern Grain Agro Ltd",
    interestedPackage: "Starter",
    estimatedBudget: 60000,
    source: "hero-previewer",
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
];

const mockOrders: MemoryOrder[] = [
  {
    id: "ord-1",
    reference: "HM-2026-8941",
    customerName: "David Oladipo",
    customerEmail: "david@fintechspark.ng",
    customerPhone: "+2348029998888",
    isOutsourcing: false,
    proposedName1: "FintechSpark Technologies Ltd",
    proposedName2: "SparkPay Digital Ltd",
    packageType: "Pro",
    shareCapitalMillions: 2,
    totalAmount: 130000,
    status: "CAC_SUBMITTED",
    directors: [
      {
        firstName: "David",
        surname: "Oladipo",
        sharePercentage: 60,
        email: "david@fintechspark.ng",
        phone: "+2348029998888",
        state: "Lagos",
        lga: "Ikeja",
      },
      {
        firstName: "Blessing",
        surname: "Oladipo",
        sharePercentage: 40,
        email: "blessing@fintechspark.ng",
        phone: "+2348021112222",
        state: "Lagos",
        lga: "Ikeja",
      },
    ],
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

export const memoryStore = {
  getLeads: () => mockLeads,
  addLead: (lead: Omit<MemoryLead, "id" | "createdAt">) => {
    const newLead: MemoryLead = {
      ...lead,
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    mockLeads.unshift(newLead);
    return newLead;
  },
  getOrders: () => mockOrders,
  addOrder: (order: Omit<MemoryOrder, "id" | "createdAt" | "reference">) => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newOrder: MemoryOrder = {
      ...order,
      id: `ord-${Date.now()}`,
      reference: `HM-2026-${randomSuffix}`,
      createdAt: new Date().toISOString(),
    };
    mockOrders.unshift(newOrder);
    return newOrder;
  },
  findOrderByRefOrPhone: (query: string) => {
    const q = query.trim().toLowerCase();
    return mockOrders.find(
      (o) =>
        o.reference.toLowerCase() === q ||
        o.customerPhone.includes(q) ||
        o.customerEmail.toLowerCase() === q
    );
  },
};
