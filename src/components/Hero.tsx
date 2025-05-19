import HeroImage from "../assets/HeroImage.png"
export default function hero() {

    return (
        <>
        <div className="flex w-100% h-[100vh] justify-center gap-[100px]">
            <div id="leftSide" className="flex flex-col ">
                <div>Title</div>
                <div>content</div>
            </div>
            <div id="rightSide">
                <img src={HeroImage} alt="image" className="w-[1500px] " />
            </div>
        </div>
            
        </>
    );

}