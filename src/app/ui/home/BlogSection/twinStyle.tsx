import tw from "twin.macro";

export const BodyBlogSection = tw.aside`
`;
export const HeaderBlogSection = tw.div`mb-10 flex justify-between items-center
    [> h3]:(font-medium text-[38px])
`;
export const ContentBlogSection = tw.ul`overflow-x-auto	flex flex-col gap-y-6 justify-between gap-x-6 items-center	
    lg:flex-row lg:flex-nowrap 
    [> li]:(w-full max-w-[357px]) 
`;
