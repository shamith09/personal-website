import memberPortal from "public/projects/member-portal.png";
import qubesat from "public/projects/qubesat.jpeg";
import pintos from "public/projects/pintos.jpeg";
import gitlet from "public/projects/gitlet.webp";
import sixt33n from "public/projects/sixt33n.jpg";

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
    name: "Gitlet",
    description:
      "A version control system based on Git that I built from scratch using Java, with add, commit, diff, merge, and more. This project involved graph theory (DFS, BFS, etc.), hashing, and serialization.",
    image: gitlet,
    url: "https://inst.eecs.berkeley.edu/~cs61b/sp22/materials/proj/proj3/index.html#the-commands",
  },
  {
    name: "SIXT33N",
    description:
      "A voice-controlled vehicle built using a TI Launchpad and PCB components. I implemented voice recognition with PCA and engineered op-amp and BJT circuits for control, along with filters and amplifiers for sound processing.",
    image: sixt33n,
    url: "https://inst.eecs.berkeley.edu/~ee16b/sp16/proj/",
  },
];

export default projects;
