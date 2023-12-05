import tw from "twin.macro";

export const BodyNewsLetter = tw.aside`py-24 px-8 bg-white-02 lg:bg-newsletter-banner bg-cover bg-no-repeat`
export const ContentNewsLetter = tw.article`flex flex-col gap-y-8 max-w-[540px] mx-auto`
export const HeaderNewsLetter = tw.div`
    text-center text-neutral-07 
    [> span]:(text-3xl mb-2 font-medium)
    [> p]:(font-normal text-sm leading-[22px])
`
export const FooterNewsLetter = tw.form`flex flex-row gap-x-2 h-[52px] border-b-[1px] border-neutral-04
    [> button]:(text-base text-neutral-04)
`
export const InputNewsLetter = tw.fieldset`
    relative grow
    [> input]:(w-full h-full pl-10 bg-transparent caret-transparent)
    [> div]:(absolute inset-y-0 left-0 flex items-center px-1)

`