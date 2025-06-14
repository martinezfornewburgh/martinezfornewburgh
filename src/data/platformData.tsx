export interface PlatformItem {
  title: string;
  icon: string;
  description: string;
}

export interface PlatformTab {
  id: string;
  title: string;
  items: PlatformItem[];
}

export const platformData: PlatformTab[] = [
  {
    id: "tab1",
    title: "Housing",
    items: [
      {
        title: "Fighting for Rent Control",
        icon: "🏠", // Replace with actual icon component/path
        description: "to lower rents & Increase homeownership by building cooperatively owned homes"
      },

    ]
  },
  {
    id: "tab2",
    title: "Economic Development",
    items: [
      {
        title: "Reimagine the Hillside BOA",
        icon: "💰", // Replace with actual icon component/path
        description: "to expand economic opportunities while providing restitution to displaced urban renewal descendants"
      },
    ]
  },
  {
    id: "tab3",
    title: "Infrastructure",
    items: [
      {
        title: "Repair sidewalks",
        icon: "🛣️", // Replace with actual icon component/path
        description: "through grants that lower the financial burden on homeowners"
      },
      {
        title: "Build bike lanes",
        icon: "📡", // Replace with actual icon component/path
        description: "to connect neighborhoods and support safe travel"
      },

    ]
  },
  {
    id: "tab4",
    title: "Environmental Justice",
    items: [
      {
        title: "Replace Central Hudson with a public utility",
        icon: "⚖️", // Replace with actual icon component/path
        description: "that will keep rates low"
      },

    ]
  }
];
