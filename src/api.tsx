// Mock data for Clients table
export const clients = [
  { id: 1, name: "Gamesa S.A. de C.V.", rfc: "GMS010101ABC", taxAddress: "Av. Paseo de la Reforma 123, CDMX", email: "contacto@gamesa.com.mx", phone: "+521234567890", contact: "Carlos Fernández" },
  { id: 2, name: "Coca-Cola FEMSA S.A.B. de C.V.", rfc: "CCF020202XYZ", taxAddress: "Calle 10 No. 456, Monterrey", email: "info@cokecolafemsa.com.mx", phone: "+521234567891", contact: "Ana Morales" },
  { id: 3, name: "Bimbo S.A. de C.V.", rfc: "BIM030303LMN", taxAddress: "Av. del Valle 789, Ciudad de México", email: "ventas@bimbo.com.mx", phone: "+521234567892", contact: "Luis Hernández" },
  {
    id: 4,
    name: "Grupo Modelo S.A. de C.V.",
    rfc: "GMO040404OPQ",
    taxAddress: "Blvd. Manuel Ávila Camacho 101, CDMX",
    email: "contacto@modelogroup.com.mx",
    phone: "+521234567893",
    contact: "María López",
  },
  { id: 5, name: "Cinemex S.A. de C.V.", rfc: "CIN050505STU", taxAddress: "Av. Santa Fe 202, CDMX", email: "informes@cinemex.net", phone: "+521234567894", contact: "Javier Ramírez" },
  { id: 6, name: "Gruma S.A. de C.V.", rfc: "GRU060606VWX", taxAddress: "Av. de los Insurgentes Sur 303, CDMX", email: "ventas@gruma.com", phone: "+521234567895", contact: "Patricia García" },
  { id: 7, name: "Alsea S.A.B. de C.V.", rfc: "ALS070707YZA", taxAddress: "Calle Emilio Castelar 404, CDMX", email: "contacto@alsea.com.mx", phone: "+521234567896", contact: "Fernando Torres" },
  {
    id: 8,
    name: "Grupo Salinas S.A. de C.V.",
    rfc: "GSA080808BCD",
    taxAddress: "Blvd. Toluca 505, Estado de México",
    email: "info@gruposalinas.com",
    phone: "+521234567897",
    contact: "Sofía Martínez",
  },
  { id: 9, name: "OXXO S.A. de C.V.", rfc: "OXX090909EFG", taxAddress: "Av. Coyoacán 606, CDMX", email: "contacto@oxxo.com.mx", phone: "+521234567898", contact: "David Pérez" },
  { id: 10, name: "Cinemark S.A. de C.V.", rfc: "CIN101010HIJ", taxAddress: "Calle Morelos 707, Guadalajara", email: "ventas@cinemark.com.mx", phone: "+521234567899", contact: "Gabriela García" },
  { id: 11, name: "Apple Inc.", rfc: "APP111111AAA", taxAddress: "1 Infinite Loop, Cupertino, CA 95014, USA", email: "contact@apple.com", phone: "+1-408-996-1010", contact: "Tim Cook" },
  {
    id: 12,
    name: "Microsoft Corporation",
    rfc: "MIC121212BBB",
    taxAddress: "1 Microsoft Way, Redmond, WA 98052, USA",
    email: "info@microsoft.com",
    phone: "+1-425-882-8080",
    contact: "Satya Nadella",
  },
  {
    id: 13,
    name: "Google LLC",
    rfc: "GOO131313CCC",
    taxAddress: "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
    email: "support@google.com",
    phone: "+1-650-253-0000",
    contact: "Sundar Pichai",
  },
  { id: 14, name: "Amazon.com, Inc.", rfc: "AMA141414DDD", taxAddress: "410 Terry Ave N, Seattle, WA 98109, USA", email: "contact@amazon.com", phone: "+1-206-266-1000", contact: "Andy Jassy" },
  { id: 15, name: "IBM Corporation", rfc: "IBM151515EEE", taxAddress: "1 New Orchard Road, Armonk, NY 10504, USA", email: "info@ibm.com", phone: "+1-914-499-1900", contact: "Arvind Krishna" },
  {
    id: 16,
    name: "Intel Corporation",
    rfc: "INT161616FFF",
    taxAddress: "2200 Mission College Blvd, Santa Clara, CA 95054, USA",
    email: "support@intel.com",
    phone: "+1-408-765-8080",
    contact: "Pat Gelsinger",
  },
  { id: 17, name: "Tesla, Inc.", rfc: "TES171717GGG", taxAddress: "3500 Deer Creek Road, Palo Alto, CA 94304, USA", email: "contact@tesla.com", phone: "+1-650-681-5000", contact: "Elon Musk" },
  { id: 18, name: "Facebook, Inc.", rfc: "FAC181818HHH", taxAddress: "1 Hacker Way, Menlo Park, CA 94025, USA", email: "info@facebook.com", phone: "+1-650-308-7300", contact: "Mark Zuckerberg" },
  {
    id: 19,
    name: "Oracle Corporation",
    rfc: "ORA191919III",
    taxAddress: "500 Oracle Parkway, Redwood City, CA 94065, USA",
    email: "contact@oracle.com",
    phone: "+1-650-506-7000",
    contact: "Safra Catz",
  },
  {
    id: 20,
    name: "Adobe Systems Incorporated",
    rfc: "ADO202020JJJ",
    taxAddress: "345 Park Avenue, San Jose, CA 95110, USA",
    email: "support@adobe.com",
    phone: "+1-408-536-6000",
    contact: "Shantanu Narayen",
  },
  {
    id: 21,
    name: "Salesforce.com, Inc.",
    rfc: "SAL212121KKK",
    taxAddress: "415 Mission Street, 3rd Floor, San Francisco, CA 94105, USA",
    email: "info@salesforce.com",
    phone: "+1-415-901-7000",
    contact: "Marc Benioff",
  },
];
// Mock data for ShippingAddresses table
export const shippingAddresses = [
  // Addresses for Gamesa S.A. de C.V.
  { id: 1, clientId: 1, shotName: "Oficina Central", address: "Av. Paseo de la Reforma 123, CDMX", postalCode: "06500", phone: "+521234567890", contact: "Carlos Fernández" },
  { id: 2, clientId: 1, shotName: "Sede de Producción", address: "Av. Santa Fe 200, CDMX", postalCode: "05100", phone: "+521234567890", contact: "Carlos Fernández" },

  // Addresses for Coca-Cola FEMSA S.A.B. de C.V.
  { id: 3, clientId: 2, shotName: "Oficina Central", address: "Calle 10 No. 456, Monterrey", postalCode: "64000", phone: "+521234567891", contact: "Ana Morales" },
  { id: 4, clientId: 2, shotName: "Almacén Principal", address: "Avenida de las Américas 123, Monterrey", postalCode: "64100", phone: "+521234567891", contact: "Ana Morales" },

  // Addresses for Bimbo S.A. de C.V.
  { id: 5, clientId: 3, shotName: "Oficina Central", address: "Av. del Valle 789, Ciudad de México", postalCode: "03100", phone: "+521234567892", contact: "Luis Hernández" },
  { id: 6, clientId: 3, shotName: "Planta de Producción", address: "Av. Insurgentes Sur 456, Ciudad de México", postalCode: "04300", phone: "+521234567892", contact: "Luis Hernández" },

  // Addresses for Grupo Modelo S.A. de C.V.
  { id: 7, clientId: 4, shotName: "Oficina Central", address: "Blvd. Manuel Ávila Camacho 101, CDMX", postalCode: "11570", phone: "+521234567893", contact: "María López" },
  { id: 8, clientId: 4, shotName: "Centro de Distribución", address: "Avenida San Jerónimo 500, CDMX", postalCode: "10200", phone: "+521234567893", contact: "María López" },

  // Addresses for Cinemex S.A. de C.V.
  { id: 9, clientId: 5, shotName: "Oficina Central", address: "Av. Santa Fe 202, CDMX", postalCode: "01376", phone: "+521234567894", contact: "Javier Ramírez" },
  { id: 10, clientId: 5, shotName: "Sede de Exhibición", address: "Paseo Interlomas 300, CDMX", postalCode: "52760", phone: "+521234567894", contact: "Javier Ramírez" },

  // Addresses for Gruma S.A. de C.V.
  { id: 11, clientId: 6, shotName: "Oficina Central", address: "Av. de los Insurgentes Sur 303, CDMX", postalCode: "03900", phone: "+521234567895", contact: "Patricia García" },
  { id: 12, clientId: 6, shotName: "Centro de Producción", address: "Calle de la Reforma 45, CDMX", postalCode: "06000", phone: "+521234567895", contact: "Patricia García" },

  // Addresses for Alsea S.A.B. de C.V.
  { id: 13, clientId: 7, shotName: "Oficina Central", address: "Calle Emilio Castelar 404, CDMX", postalCode: "11570", phone: "+521234567896", contact: "Fernando Torres" },
  { id: 14, clientId: 7, shotName: "Centro de Operaciones", address: "Avenida Reforma 123, CDMX", postalCode: "06600", phone: "+521234567896", contact: "Fernando Torres" },

  // Addresses for Grupo Salinas S.A. de C.V.
  { id: 15, clientId: 8, shotName: "Oficina Central", address: "Blvd. Toluca 505, Estado de México", postalCode: "52100", phone: "+521234567897", contact: "Sofía Martínez" },
  { id: 16, clientId: 8, shotName: "Almacén Principal", address: "Calle de la Estación 200, Estado de México", postalCode: "52000", phone: "+521234567897", contact: "Sofía Martínez" },

  // Addresses for OXXO S.A. de C.V.
  { id: 17, clientId: 9, shotName: "Oficina Central", address: "Av. Coyoacán 606, CDMX", postalCode: "04350", phone: "+521234567898", contact: "David Pérez" },
  { id: 18, clientId: 9, shotName: "Centro de Distribución", address: "Calle Nezahualcóyotl 150, CDMX", postalCode: "06060", phone: "+521234567898", contact: "David Pérez" },

  // Addresses for Cinemark S.A. de C.V.
  { id: 19, clientId: 10, shotName: "Oficina Central", address: "Calle Morelos 707, Guadalajara", postalCode: "44100", phone: "+521234567899", contact: "Gabriela García" },
  { id: 20, clientId: 10, shotName: "Centro de Exhibición", address: "Avenida Juárez 200, Guadalajara", postalCode: "44200", phone: "+521234567899", contact: "Gabriela García" },
  { id: 21, clientId: 10, shotName: "Almacén", address: "Calle 16 de Septiembre 300, Guadalajara", postalCode: "44300", phone: "+521234567899", contact: "Gabriela García" },

  // Addresses for Apple Inc.
  { id: 22, clientId: 11, shotName: "Headquarters", address: "1 Infinite Loop, Cupertino, CA 95014, USA", postalCode: "95014", phone: "+1-408-996-1010", contact: "Tim Cook" },

  // Addresses for Microsoft Corporation
  { id: 23, clientId: 12, shotName: "Headquarters", address: "1 Microsoft Way, Redmond, WA 98052, USA", postalCode: "98052", phone: "+1-425-882-8080", contact: "Satya Nadella" },

  // Addresses for Google LLC
  { id: 24, clientId: 13, shotName: "Headquarters", address: "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA", postalCode: "94043", phone: "+1-650-253-0000", contact: "Sundar Pichai" },

  // Addresses for Amazon.com, Inc.
  { id: 25, clientId: 14, shotName: "Headquarters", address: "410 Terry Ave N, Seattle, WA 98109, USA", postalCode: "98109", phone: "+1-206-266-1000", contact: "Andy Jassy" },

  // Addresses for IBM Corporation
  { id: 26, clientId: 15, shotName: "Headquarters", address: "1 New Orchard Road, Armonk, NY 10504, USA", postalCode: "10504", phone: "+1-914-499-1900", contact: "Arvind Krishna" },

  // Addresses for Intel Corporation
  { id: 27, clientId: 16, shotName: "Headquarters", address: "2200 Mission College Blvd, Santa Clara, CA 95054, USA", postalCode: "95054", phone: "+1-408-765-8080", contact: "Pat Gelsinger" },

  // Addresses for Tesla, Inc.
  { id: 28, clientId: 17, shotName: "Headquarters", address: "3500 Deer Creek Road, Palo Alto, CA 94304, USA", postalCode: "94304", phone: "+1-650-681-5000", contact: "Elon Musk" },

  // Addresses for Facebook, Inc.
  { id: 29, clientId: 18, shotName: "Headquarters", address: "1 Hacker Way, Menlo Park, CA 94025, USA", postalCode: "94025", phone: "+1-650-308-7300", contact: "Mark Zuckerberg" },

  // Addresses for Oracle Corporation
  { id: 30, clientId: 19, shotName: "Headquarters", address: "500 Oracle Parkway, Redwood Shores, CA 94065, USA", postalCode: "94065", phone: "+1-650-506-7000", contact: "Safra Catz" },

  // Addresses for Salesforce.com, Inc.
  { id: 31, clientId: 20, shotName: "Headquarters", address: "415 Mission Street, 3rd Floor, San Francisco, CA 94105, USA", postalCode: "94105", phone: "+1-415-901-7000", contact: "Marc Benioff" },

  // Addresses for Zoom Video Communications, Inc.
  { id: 32, clientId: 21, shotName: "Headquarters", address: "55 Almaden Blvd, San Jose, CA 95113, USA", postalCode: "95113", phone: "+1-888-799-9666", contact: "Eric Yuan" },
];
// Mock data for Products table
export const products = [
  { id: 1, sku: "P001", description: "Large Box", unitOfMeasurement: "PIECE", imageUrl: "https://m.media-amazon.com/images/I/81uwMTb5PuL.jpg", price: "10" },
  { id: 2, sku: "P002", description: "Classic Box", unitOfMeasurement: "PIECE", imageUrl: "https://m.media-amazon.com/images/I/71j1olgsndL.jpg", price: "19" },
  { id: 3, sku: "P003", description: "Pro Box", unitOfMeasurement: "LOT", imageUrl: "https://5.imimg.com/data5/PS/CH/MY-37381179/packaging-boxes.jpg", price: "23" },
  { id: 4, sku: "P004", description: "Pro Box", unitOfMeasurement: "LOT", imageUrl: "https://5.imimg.com/data5/PS/CH/MY-37381179/packaging-boxes.jpg", price: "23" },
  { id: 5, sku: "P005", description: "Pro Box", unitOfMeasurement: "LOT", imageUrl: "https://5.imimg.com/data5/PS/CH/MY-37381179/packaging-boxes.jpg", price: "23" },
  { id: 6, sku: "P006", description: "Pro Box", unitOfMeasurement: "LOT", imageUrl: "https://5.imimg.com/data5/PS/CH/MY-37381179/packaging-boxes.jpg", price: "23" },
  { id: 7, sku: "P007", description: "Pro Box", unitOfMeasurement: "LOT", imageUrl: "https://5.imimg.com/data5/PS/CH/MY-37381179/packaging-boxes.jpg", price: "23" },
  { id: 8, sku: "P008", description: "Pro Box", unitOfMeasurement: "LOT", imageUrl: "https://5.imimg.com/data5/PS/CH/MY-37381179/packaging-boxes.jpg", price: "23" },
];
