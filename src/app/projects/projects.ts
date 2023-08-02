import memberPortal from "public/projects/member-portal.png";
import qubesat from "public/projects/qubesat.jpeg";
import pintos from "public/projects/pintos.jpeg";

const projects = [
  {
    name: "PlexTech Member Portal",
    description:
      "A portal for members of the PlexTech, a software consulting club at UC Berkeley, to submit requests for reimbursements for club activities. Features automatic ACH transfers and an automated attendance logger.",
    image: memberPortal,
    url: "https://plextech-member-portal.vercel.app/",
  },
  {
    name: "Qubesat",
    description:
      "A small satellite that conducts an electron spin resonance experiment in low earth orbit. I worked on the software, achieving a 100x improvement in speed over the previous implementation, allowing for more data to be collected.",
    image: qubesat,
    url: "http://stac.berkeley.edu/project/qubesat",
  },
  {
    name: "Pintos",
    description:
      "An operating system with a file system, multithreading/multiprocessing, virtual memory, and more. We built it in C and some x86 assembly.",
    image: pintos,
    url: "https://cs162.org/static/proj/pintos-docs/",
  },
  {
    name: "PlexTech Member Portal",
    description:
      "A portal for members of the PlexTech community to view and manage their account.",
    image: memberPortal,
    url: "https://plextech-member-portal.vercel.app/",
  },
];

export default projects;
