import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const Person = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill="none"
    ref={ref}
    {...props}
  >
    <g fill="currentColor" clipPath="url(#Person_svg__a)">
      <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M18 21a1 1 0 0 0 1-1 7 7 0 1 0-14 0 1 1 0 0 0 1 1z" />
    </g>
    <defs>
      <clipPath id="Person_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(Person)
const Memo = memo(ForwardRef)
export default Memo
