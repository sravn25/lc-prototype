export const inventoryData = [
  {
    id: "INV001",
    name: "Bath Towel",
    category: "Housekeeping",
    stock: 45,
    price: 99.99,
    status: "In Stock",
    supplier: "TechCorp",
  },
  {
    id: "INV002",
    name: "Hand Towel",
    category: "Housekeeping",
    stock: 12,
    price: 249.99,
    status: "Low Stock",
    supplier: "FurniMax",
  },
  {
    id: "INV003",
    name: "Bathrobe",
    category: "Garment",
    stock: 0,
    price: 79.99,
    status: "Out of Stock",
    supplier: "HomeGoods",
  },
  {
    id: "INV004",
    name: "Bedsheet",
    category: "Housekeeping",
    stock: 150,
    price: 12.99,
    status: "In Stock",
    supplier: "PaperPlus",
  },
  {
    id: "INV005",
    name: "Pillow case",
    category: "Housekeeping",
    stock: 8,
    price: 34.99,
    status: "Low Stock",
    supplier: "LightCo",
  },
];

export const customerData = [
  {
    id: "CUST001",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    totalOrders: 12,
    totalSpent: 1299.88,
    status: "Active",
    joinDate: "2023-01-15",
  },
  {
    id: "CUST002",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 987-6543",
    totalOrders: 8,
    totalSpent: 756.32,
    status: "Active",
    joinDate: "2023-03-22",
  },
  {
    id: "CUST003",
    name: "Mike Davis",
    email: "mike.davis@email.com",
    phone: "+1 (555) 456-7890",
    totalOrders: 3,
    totalSpent: 189.97,
    status: "Inactive",
    joinDate: "2023-08-10",
  },
  {
    id: "CUST004",
    name: "Emily Brown",
    email: "emily.brown@email.com",
    phone: "+1 (555) 321-0987",
    totalOrders: 15,
    totalSpent: 2145.67,
    status: "VIP",
    joinDate: "2022-11-05",
  },
  {
    id: "CUST005",
    name: "David Wilson",
    email: "d.wilson@email.com",
    phone: "+1 (555) 654-3210",
    totalOrders: 6,
    totalSpent: 432.15,
    status: "Active",
    joinDate: "2023-06-18",
  },
];

export const qualityData = [
  {
    id: "T01",
    name: "Bath Towel",
    category: "Housekeeping",
    amount: 45,
    torn: 1,
    stain: 0,
    treshold: 5,
  },
  {
    id: "T02",
    name: "Hand Towel",
    category: "Housekeeping",
    amount: 60,
    torn: 2,
    stain: 5,
    treshold: 5,
  },
  {
    id: "T03",
    name: "Pillow Case",
    category: "Housekeeping",
    amount: 85,
    torn: 2,
    stain: 4,
    treshold: 5,
  },
  {
    id: "T04",
    name: "Uniform",
    category: "Garment",
    amount: 32,
    torn: 3,
    stain: 4,
    treshold: 2,
  },
  {
    id: "T05",
    name: "Bed sheet (K)",
    category: "Housekeeping",
    amount: 50,
    torn: 2,
    stain: 1,
    treshold: 5,
  },
];

export type OrderStatus = "ongoing" | "awaiting";

export type CollectOrderEntry = {
  id: string;
  hotelName: string;
  timestamp: string;
  status: OrderStatus;
};

export type DeliveryOrderEntry = {
  id: string;
  hotelName: string;
  timestamp: string;
  status: OrderStatus;
};

export const collectOrderData: CollectOrderEntry[] = [
  {
    id: "COL-001",
    hotelName: "Grand Imperial Hotel",
    timestamp: "2025-07-30T09:15:00Z",
    status: "ongoing",
  },
  {
    id: "COL-002",
    hotelName: "Sunrise Suites",
    timestamp: "2025-07-29T15:45:00Z",
    status: "awaiting",
  },
  {
    id: "COL-003",
    hotelName: "Ocean Breeze Resort",
    timestamp: "2025-07-28T11:00:00Z",
    status: "ongoing",
  },
  {
    id: "COL-004",
    hotelName: "Mountain View Inn",
    timestamp: "2025-07-27T13:30:00Z",
    status: "awaiting",
  },
  {
    id: "COL-005",
    hotelName: "City Central Lodge",
    timestamp: "2025-07-26T08:45:00Z",
    status: "awaiting",
  },
];

export const deliveryOrderData: DeliveryOrderEntry[] = [
  {
    id: "DEL-001",
    hotelName: "Evergreen Palace",
    timestamp: "2025-07-30T14:00:00Z",
    status: "awaiting",
  },
  {
    id: "DEL-002",
    hotelName: "Sunrise Suites",
    timestamp: "2025-07-29T18:00:00Z",
    status: "awaiting",
  },
  {
    id: "DEL-003",
    hotelName: "Seaside Haven Resort",
    timestamp: "2025-07-28T16:20:00Z",
    status: "ongoing",
  },
  {
    id: "DEL-004",
    hotelName: "Maplewood Inn",
    timestamp: "2025-07-27T12:00:00Z",
    status: "awaiting",
  },
  {
    id: "DEL-005",
    hotelName: "Orchid Garden Hotel",
    timestamp: "2025-07-26T10:10:00Z",
    status: "ongoing",
  },
];
