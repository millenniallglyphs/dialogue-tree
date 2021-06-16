export default function Icon({ type }) {
    return(
        type==='paper' ? (
            <>
            <svg width="50" height="65" viewBox="0 0 97 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="11.9727" y="11.5205" width="84.3091" height="102.709" rx="7.5" fill="white" stroke="#C5C3C3"/>
<path d="M22.3457 28.5845H58.1989" stroke="#3C3C3C" stroke-width="3" stroke-linecap="round"/>
<path d="M22.3457 39.8755H81.7275" stroke="#3C3C3C" stroke-width="3" stroke-linecap="round"/>
<path d="M22.3457 52.8389H81.7275" stroke="#3C3C3C" stroke-width="3" stroke-linecap="round"/>
<g filter="url(#filter0_d)">
<rect x="5.28125" y="1.48438" width="84.3091" height="102.709" rx="7.5" fill="white" stroke="#C5C3C3"/>
<path d="M15.6543 18.5479H51.5075" stroke="#3C3C3C" stroke-width="3" stroke-linecap="round"/>
<path d="M15.6543 29.8389H75.0361" stroke="#3C3C3C" stroke-width="3" stroke-linecap="round"/>
<path d="M15.6543 42.8027H75.0361" stroke="#3C3C3C" stroke-width="3" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d" x="0.78125" y="0.984375" width="93.3091" height="111.709" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

            </>
        ) : (
            null
        )
    )
}