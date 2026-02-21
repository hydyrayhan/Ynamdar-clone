import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

function BreadCrumb({ links }: { links: { title: string, link: string }[] }) {
  return (
    <div className="flex items-center mb-5">
      {
        links.map((link, i) => (
          <Link className={"flex text-custom-blue text-sm items-center "+(i==links.length-1 && "font-semibold")} to={link.link} key={"breadCrumb-" + link.link}>
            {link.title}
            {
              i !== links.length - 1 && <ChevronRight size={16}/>
            }
          </Link>
        ))
      }
    </div>
  )
}

export default BreadCrumb