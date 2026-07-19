import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hocker AGI Technologies",
    short_name: "Hocker",
    description: "Ecosistema de IA, marketing y software.",
    start_url: "/",
    display: "standalone",
    background_color: "#03050b",
    theme_color: "#0b1120",
    icons: [
      {
        src: "/brand/hocker-agi-technologies.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
