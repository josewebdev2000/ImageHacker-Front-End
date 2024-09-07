import Hero from "../../components/Hero/Hero.component";
function Home()
{
    return (
        <div className="w-screen h-screen" data-theme="dark">
            <Hero 
                title="Image Hacker" 
                imgSrc="../../assets/pics/logo.png"
                content="Have you got any images to edit? Try ImageHacker out"
            />
        </div>
    );
}

export default Home;