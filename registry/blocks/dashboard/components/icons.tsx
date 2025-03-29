type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none">
        <g
          id="aoian_logo"
          transform="translate(0.577, 0.5)"
          fill="currentColor"
        >
          <g transform="translate(32, 40)">
            <g transform="translate(0, 0)">
              <path d="M15.6228851,157.460653 C8.73493802,146.046964 9.14798013,132.013619 16.696884,120.970923 L87.1034716,17.6623351 C94.4398289,6.35864079 107.717636,-0.382506973 121.859265,0.0168046332 C135.990601,0.333231198 148.844304,7.73654564 155.496311,19.3906493 C162.059637,30.98708 161.239222,44.9390354 153.378147,55.8246271 L83.0163092,159.133215 C75.7644766,169.692198 63.2388228,176.05415 49.8118467,176 C35.6731587,176.027125 22.6115732,168.945016 15.6228851,157.460653 Z"></path>
              <ellipse
                cx="170.634167"
                cy="142.731707"
                rx="36.4878092"
                ry="33.2682927"
              ></ellipse>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
}
