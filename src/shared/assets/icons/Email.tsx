import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const Email = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill="none"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#Email_svg__a)">
      <path
        fill="currentColor"
        d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m0 2-6.5 4.47a1 1 0 0 1-1 0L5 6z"
      />
    </g>
    <defs>
      <clipPath id="Email_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(Email)
const Memo = memo(ForwardRef)
export default Memo
