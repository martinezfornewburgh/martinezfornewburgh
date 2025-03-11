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
    title: "Accessible Housing",
    items: [
      {
        title: "Affordable Housing",
        icon: "🏠", // Replace with actual icon component/path
        description: "The average median household income in Newburgh is approximately $33,000, where the average tenant pays $18,000 a year for rent. That is more than half their yearly income. Giselle believes in advocating and ensuring that everyone has access to affordable housing. Through local law, we can assure that developers building or renovating apartments set aside a percentage for affordable housing."
      },
      {
        title: "Home Ownership",
        icon: "🏡", // Replace with actual icon component/path
        description: "Newburgh has a renter percent of 68.3% which is the highest percent in our area. Giselle has seen the positive effects of the housing programs in Newburgh that provide a pathway for homeownership to residents. Promoting homeownership to longtime residents will help combat gentrification."
      },
      // Add more housing items as needed
    ]
  },
  {
    id: "tab2",
    title: "Reliable Infrastructure",
    items: [
      {
        title: "Roads & Sidewalks",
        icon: "🛣️", // Replace with actual icon component/path
        description: "In the past, Newburgh has struggled restoring its infrastructure. Giselle  believes we should continue to repave our roads and maintain our sidewalks. Through community block grants, property owners can apply for financial assistance in repairing damaged sidewalks."
      },
      {
        title: "Community Public Wi-Fi",
        icon: "📡", // Replace with actual icon component/path
        description: "Now more than ever, the internet is no longer a luxury but rather a necessity. With the recent pandemic, community members have resorted to relying on Wi-Fi to attend school, work remotely, or see loved ones. By providing free public wifi, we can ensure that everyone has equal access to the internet and make their daily lives easier."
      },
      {
        title: "Bus Routes",
        icon: "🚌", // Replace with actual icon component/path
        description: "Expanding bus routes would ease the burden for residents in need of alternate transportation options. It would increase accessibility for jobs and allow local and county governments to address the issues of transportation while simultaneously working to generate new employment  opportunities."
      },
      {
        title: "Waste Management Programs",
        icon: "♻️", // Replace with actual icon component/path
        description: "Incinerating toxic waste is costly and contributes to global warming. Through community composting programs we can aim to reduce the amount of trash by at least 30% and promote a cleaner city."
      },
      // Add more infrastructure items as needed
    ]
  },
  {
    id: "tab3",
    title: "Social Justice",
    items: [
      {
        title: "Racial Equity in Criminal Justice System",
        icon: "⚖️", // Replace with actual icon component/path
        description: "Through the Executive 203 Oversight Committee and Police-Community Relations and Review Board we have seen the need for more efforts to be made on behalf of the administration. Giselle believes that we can improve the transparency within the police department and Newburgh residents."
      },
      {
        title: "Mental Health Services",
        icon: "🧠", // Replace with actual icon component/path
        description: "Lack of accessibility to mental health services has disproportionately affected communities of color. With the recent pandemic, more residents are experiencing higher rates of depression and anxiety. By partnering with the county and state, we can work to ensure residents have equitable access to mental health services."
      },
      {
        title: "Climate Emergency",
        icon: "🌎", // Replace with actual icon component/path
        description: "For too long our city has been abused by large corporations that pollute our water and air. Enough is enough. Not only should we work to make our city beautiful but safe. By declaring a climate emergency, we can work to ensure a cleaner and safer Newburgh for all and future generations to come."
      },
      {
        title: "Cleaner Streets & Parks",
        icon: "🌳", // Replace with actual icon component/path
        description: "Giselle has volunteered with local organizations to clean up Newburgh. She believes in investing time to clean our streets and parks to make them safer and accessible to our youth."
      },
      // Add more social justice items as needed
    ]
  }
];
