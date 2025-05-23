import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const PersonOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill="none"
    ref={ref}
    {...props}
  >
    <g fill="currentColor" clipPath="url(#PersonOutline_svg__a)">
      <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12 13a7 7 0 0 0-7 7 1 1 0 1 0 2 0 5 5 0 1 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7" />
    </g>
    <defs>
      <clipPath id="PersonOutline_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(PersonOutline)
const Memo = memo(ForwardRef)
export default Memo
