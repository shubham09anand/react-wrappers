import { twMerge } from "tailwind-merge";

function getInitials(name = "") {
     const parts = name.trim().split(/\s+/).filter(Boolean);
     if (parts.length === 0) return "?";
     if (parts.length === 1) return parts[0][0].toUpperCase();
     return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function ProfileImage({ src, variantClass, name, initialVariantClass }) {

     return (
          <>
               {src ?
                    <img src={src} alt={name || ''} className={twMerge(`w-16 h-16 mx-auto rounded-full object-cover ${variantClass}`)} />
                    :
                    <div className={twMerge("w-16 h-16 mx-auto rounded-full place-content-center items-center justify-center shrink-0 bg-(--theme)", variantClass)}>
                         <div className={`text-white text-4xl w-fit mx-auto font-semibold leading-none ${initialVariantClass}`}>
                              {getInitials(name || '')}
                         </div>
                    </div>
               }
          </>
     );
}
