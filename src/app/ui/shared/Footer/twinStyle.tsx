import tw from "twin.macro";

export const BodyFooter = tw.footer`py-12 px-8 bg-neutral-06 flex flex-col gap-y-10 text-white-01
    lg:px-40 lg:py-20
`
export const HeaderFooter = tw.div`flex flex-col gap-y-10
    lg:flex-row lg:justify-between
`
export const LogoFooter = tw.div`
    flex flex-col gap-y-4 items-center 
    lg:flex-row lg:gap-x-8
    [> span]:(text-2xl font-medium)
    [> div]:(block h-[1px] w-6 bg-neutral-04
        lg:rotate-90 )
    [> p]:(text-sm font-normal)
`
export const NavigatorFooter = tw.ul`
    flex flex-col gap-y-8 items-center
    lg:flex-row lg:gap-x-10
    [> li]:()
`

export const SocialFooter = tw.div`border-t-[1px] border-neutral-04 py-6 flex flex-col gap-y-8
        lg:flex-row-reverse lg:justify-between
`
export const IconsFooter = tw.div`flex flex-row justify-center gap-x-6`
export const CopyrightFooter = tw.div`
    flex flex-col gap-y-7 items-center
    lg:flex-row lg:gap-x-7
    [> div]:(flex gap-x-7 justify-center font-semibold text-xs)
    [> span]:(text-xs font-normal)
`