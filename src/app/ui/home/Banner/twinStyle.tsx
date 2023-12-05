import tw from "twin.macro";

export const BodyBanner = tw.aside`w-full flex flex-col lg:flex-row `
export const PictureBanner = tw.picture`relative w-full h-[367px] lg:h-[468px] block lg:flex-1`
export const ContentBanner = tw.article`px-8 h-[367px] bg-white-02 flex justify-center lg:h-[468px]
    lg:flex-1 
    [> div]:(max-w-[452px] flex flex-col gap-y-6 justify-center )
`
export const ContenHeaderBanner = tw.div`
    flex flex-col gap-y-4 text-neutral-07 
    [> span]:(leading-4 text-blue-01 text-base font-bold uppercase)
    [> h3]:(text-[34px] leading-[38px] font-medium)
    [> p]:(font-normal text-base leading-[26px]	)
`