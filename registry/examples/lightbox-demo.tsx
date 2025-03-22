import { Lightbox, LightboxItem } from "@/registry/aoian-ui/lightbox/lightbox"

export default function LightboxDemo() {
  const itemClass = "cursor-pointer object-cover size-20 rounded-lg"
  return (
    <Lightbox>
      <div className="grid grid-cols-3 gap-3">
        <LightboxItem src="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg">
          <img
            className={itemClass}
            src="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
          />
        </LightboxItem>
        <LightboxItem src="https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg">
          <img
            className={itemClass}
            src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
          />
        </LightboxItem>
      </div>
    </Lightbox>
  )
}
