import IconCloud from "./ui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "react",
    "angular",
    
    "flutter",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "amazonaws",
    "postgresql",
    // "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    // "cypress",
    "docker",
    "git",
    "jira",
    "github",
    // "gitlab",
    "visualstudiocode",
    "androidstudio",
    // "sonarqube",
    "figma",
];

function IconCloudDemo() {
    return (
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}

export default IconCloudDemo;
