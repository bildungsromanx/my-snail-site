export type Painting = {
  id: string;
  src: string;
  caption: string;
  date: string;
  series?: string;
};

export const paintings= [
  { id: "1", src: "/paintings/33.webp", caption: "Pragmatic Strangers", date: "2023-12-09" },
  { id: "2", src: "/paintings/34.webp", caption: "Chosen Caviar", date: "2023-12-09" },
  { id: "3", src: "/paintings/32.webp", caption: "Anatomy of a Roach", date: "2023-04-15" },
  { id: "4", src: "/paintings/30.webp", caption: "Green Smile", date: "2023-02-19" },
  { id: "5", src: "/paintings/19.jpg", caption: "Mermaid", date: "2023-02-19" },
  { id: "6", src: "/paintings/17.webp", caption: "Thanksgiving", date: "2023-12-11" },
  { id: "7", src: "/paintings/28.webp", caption: "Fours", date: "2021-03-07" },
  { id: "8", src: "/paintings/29.webp", caption: "Childhood Home", date: "2021-04-07" },
  { id: "9", src: "/paintings/26.webp", caption: "Bathroom Floor", date: "2021-01-11" },
  { id: "10", src: "/paintings/15.jpg", caption: "Anatomy of a Roach (2)", date: "2023-04-15" },
  { id: "11", src: "/paintings/22.webp", caption: "Kissy", date: "2023-10-29" },
  { id: "12", src: "/paintings/21.webp", caption: "Kissy Kissy", date: "2023-10-29" },
  { id: "13", src: "/paintings/20.webp", caption: "I am Number 1", date: "2023-11-03" },
  { id: "14", src: "/paintings/12.webp", caption: "Crab Hand", date: "2024-01-06" },
  { id: "15", src: "/paintings/11.webp", caption: "Mermaid Ear", date: "2024-01-14" },
  { id: "16", src: "/paintings/10.webp", caption: "Fish (1)", date: "2024-12-18" },
  { id: "17", src: "/paintings/8.webp", caption: "Fish (2)", date: "2024-12-18" },
  { id: "18", src: "/paintings/9.webp", caption: "Fish (3)", date: "2024-12-18" },
  { id: "19", src: "/paintings/7.webp", caption: "Fish (4)", date: "2024-12-18" },
  { id: "20", src: "/paintings/6.webp", caption: "Toad In Water", date: "2025-01-18" },
  { id: "21", src: "/paintings/5.webp", caption: "Study of Bivalves", date: "2025-02-19" },
  { id: "22", src: "/paintings/4.webp", caption: "Study of Slugs", date: "2025-02-24" },
  { id: "23", src: "/paintings/3.webp", caption: "Snowflake on Sea Flower", date: "2025-02-25" },
  { id: "24", src: "/paintings/1.webp", caption: "Venus Running (1)", date: "2025-04-05" },
  { id: "25", src: "/paintings/2.webp", caption: "Venus Running (2)", date: "2025-04-05" },
  { id: "26", src: "/paintings/13.webp", caption: "Anatomy of a Roach (3)", date: "2023-04-15", series: "Roach Studies" },
  { id: "27", src: "/paintings/14.webp", caption: "Anatomy of a Roach (4)", date: "2023-04-15", series: "Roach Studies" },
  { id: "28", src: "/paintings/25.webp", caption: "Anatomy of a Roach (5)", date: "2023-04-15", series: "Roach Studies" },
  { id: "29", src: "/paintings/31.webp", caption: "Woman on Soil", date: "2021-07-19" },
  { id: "30", src: "/paintings/27.webp", caption: "Safety Blanket", date: "2023-02-19" },
  { id: "31", src: "/paintings/24.webp", caption: "Outside", date: "2023-02-19" },
  { id: "32", src: "/paintings/23.webp", caption: "Self-portrait", date: "2023-02-19" },
  { id: "33", src: "/paintings/18.webp", caption: "Safety Blanket (2)", date: "2023-02-19" },
  { id: "34", src: "/paintings/16.webp", caption: "Outside (2)", date: "2023-02-19" },
  { id: "35", src: "/paintings/35.webp", caption: "Toad in Toad", date: "2025-04-03" },
  { id: "36", src: "/paintings/36.webp", caption: "Study of fins", date: "2025-04-04" },
  { id: "37", src: "/paintings/37.webp", caption: "Study in Developmental Biology (1)", date: "2025-04-04" },
  { id: "38", src: "/paintings/38.webp", caption: "Study in Developmental Biology (2)", date: "2025-04-04" },
  { id: "39", src: "/paintings/39.webp", caption: "Crying Chicken", date: "2025-05-08" },
  { id: "40", src: "/paintings/40.webp", caption: "Your Bed", date: "2025-06-05" },
  { id: "41", src: "/paintings/41.webp", caption: "Tai Chi Ball (2)", date: "2025-05-10" },
  { id: "42", src: "/paintings/42.webp", caption: "Tai Chi Ball", date: "2025-05-09" },
  { id: "43", src: "/paintings/43.webp", caption: "Study in Developmental Biology (3)", date: "2025-04-04" },
  { id: "45", src: "/paintings/45.webp", caption: "Birthing", date: "2025-08-13" },
  { id: "46", src: "/paintings/46.webp", caption: "Shit", date: "2025-08-15" },
  { id: "47", src: "/paintings/47.webp", caption: "Birthing (2)", date: "2025-08-15" },
  { id: "48", src: "/paintings/48.webp", caption: "Will No One Rid Me of This Turbulent Priest?", date: "2025-09-12" },
  { id: "49", src: "/paintings/49.webp", caption: "I Hate This Museum", date: "2025-09-12" },
  // { id: "50", src: "/paintings/50.webp", caption: "", date: "2025-08-14" },
  { id: "51", src: "/paintings/51.webp", caption: "Prehistoric Man vs Male Loneliness Epidemic", date: "2025-05-24" },
  { id: "52", src: "/paintings/52.webp", caption: "Slinky", date: "2025-05-23" },
  { id: "53", src: "/paintings/53.webp", caption: "Mom, It's so Pretty Out There", date: "2025-05-17" },
  { id: "54", src: "/paintings/54.webp", caption: "Fountain", date: "2025-06-21" },
  { id: "55", src: "/paintings/55.webp", caption: "Fountain (2)", date: "2025-06-21" },
  { id: "56", src: "/paintings/56.webp", caption: "Study of Sea Lion (2)", date: "2025-05-09" },
  { id: "57", src: "/paintings/57.webp", caption: "Study of Sea Lion", date: "2025-05-09" },
  { id: "58", src: "/paintings/58.webp", caption: "How I Felt That Morning", date: "2025-05-01" },
  { id: "59", src: "/paintings/59.webp", caption: "Saw Something I Shouldn't Have", date: "2023-10-31" },
  { id: "60", src: "/paintings/60.webp", caption: "Exiting The Whale", date: "2023-02-20" },
  { id: "62", src: "/paintings/62.webp", caption: "Contact With The Outside", date: "2023-02-21" },
  { id: "68", src: "/paintings/68.webp", caption: "Swooshing Inside The Whale", date: "2023-02-22" },
]

  export const paintingsByYear = paintings.reduce((acc, painting) => {
  const year = new Date(painting.date).getFullYear();
  if (!acc[year]) acc[year] = [];
  acc[year].push(painting);
  acc[year].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return acc;
}, {} as Record<string, Painting[]>);

export const years = Object.keys(paintingsByYear)
  .map(Number)
  .sort((a, b) => b - a);