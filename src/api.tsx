// Mock data for Clients table
export const clients = [
  { id: 1, name: "Juan Pérez", rfc: "JUPR800101K41", taxAddress: "1234 Elm Street", email: "juan.perez@example.com", phone: "555-1234", contact: "Ana García" },
  { id: 2, name: "María López", rfc: "MALP900202H56", taxAddress: "5678 Oak Avenue", email: "maria.lopez@example.com", phone: "555-5678", contact: "Luis Sánchez" },
  { id: 3, name: "Carlos Ramírez", rfc: "CARAM950303M23", taxAddress: "9101 Pine Road", email: "carlos.ramirez@example.com", phone: "555-9101", contact: "Rosa Martínez" },
];

// Mock data for ShippingAddresses table
export const shippingAddresses = [
  { id: 1, clientId: 1, shotName: "Home", address: "1234 Elm Street, Apt 5", postalCode: "12345", phone: "555-1234", contact: "Ana García" },
  { id: 2, clientId: 1, shotName: "Office", address: "6789 Maple Drive", postalCode: "67890", phone: "555-6789", contact: "Luis Sánchez" },
  { id: 3, clientId: 2, shotName: "Home", address: "5678 Oak Avenue, Suite 10", postalCode: "54321", phone: "555-5678", contact: "Rosa Martínez" },
  { id: 4, clientId: 2, shotName: "Warehouse", address: "8765 Cedar Lane", postalCode: "43210", phone: "555-8765", contact: "Ana García" },
  { id: 5, clientId: 3, shotName: "Home", address: "9101 Pine Road, Unit 12", postalCode: "98765", phone: "555-9101", contact: "Ana García" },
  { id: 6, clientId: 3, shotName: "Office", address: "5432 Birch Street", postalCode: "67890", phone: "555-5432", contact: "Luis Sánchez" },
];

// Mock data for Products table
export const products = [
  { id: 1, sku: "SKU001", description: "Widget A", unitOfMeasurement: "PIECE" },
  { id: 2, sku: "SKU002", description: "Widget B", unitOfMeasurement: "LOT" },
  { id: 3, sku: "SKU003", description: "Gadget C", unitOfMeasurement: "PIECE" },
  { id: 4, sku: "SKU004", description: "Gadget D", unitOfMeasurement: "LOT" },
  { id: 5, sku: "SKU005", description: "Tool E", unitOfMeasurement: "LOT" },
  { id: 6, sku: "SKU006", description: "Tool F", unitOfMeasurement: "LOT" },
];
