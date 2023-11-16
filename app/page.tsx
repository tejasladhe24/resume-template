import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Content,
  SectionProps,
  educationData,
  extracurricsData,
  headerData,
  projectData,
  skills,
  workData,
} from "@/lib/data";
import { cn } from "@/lib/utils";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <ScrollArea className="w-full px-2 md:px-10 lg:px-16 py-10">
      <main id="page" className="px-[14.11mm] pt-[8.11mm] pb-[4.4mm]">
        {/* Header */}
        <section className="w-full">
          <Header params={headerData} />
        </section>

        {/* Skills */}
        <section className="w-full">
          <div className="flex flex-col space-y-2">
            <SectionHeader
              heading={"Programming & Development"}
              className="text-lg font-mono"
            />
            <SkillSet data={skills} />
          </div>
        </section>

        {/* Work Experience */}
        <section className="w-full">
          <Section params={workData as SectionProps} />
        </section>

        {/* Education */}
        <section className="w-full">
          <Section params={educationData as SectionProps} />
        </section>

        {/* Key Projects */}
        {/* <section className="w-full">
          <Section params={projectData as SectionProps} />
        </section> */}

        {/* Extra Currics */}
        <section className="w-full">
          <Section params={extracurricsData as SectionProps} />
        </section>
      </main>
    </ScrollArea>
  );
}

const Header = ({
  params,
}: {
  params: {
    imageUrl: string;
    firstName: string;
    lastName: string;
    designation: string;
    email: string;
    phone: string;
    linkedin: string;
    preferred_locations: string[];
  };
}) => {
  const IconSet = {
    location: <MapPin className="h-4 w-4" />,
    phone: <Phone className="h-4 w-4" />,
    email: <Mail className="h-4 w-4" />,
    linkedin: <Linkedin className="h-4 w-4" />,
  };

  const InfoBlock = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div
        className={cn(
          "flex flex-col space-y-2 items-end justify-between",
          className
        )}
      >
        {children}
      </div>
    );
  };

  const InfoBlockItem = ({
    value,
    icon,
  }: {
    value: string;
    icon: "location" | "phone" | "email" | "linkedin";
  }) => {
    return (
      <div className="flex items-center space-x-4">
        <div>{value}</div>
        {IconSet[icon]}
      </div>
    );
  };

  return (
    <div className="flex items-start justify-between space-x-4 py-4">
      <div className="flex items-start space-x-4">
        <Avatar className="w-24 h-24 bg-sky-900 relative">
          <AvatarImage src={params.imageUrl} className="absolute left-[10px] top-[10px] object-cover object-top scale-[1.8]" />
        </Avatar>
        <div className="flex flex-col h-24 justify-around">
          <h1 className="text-5xl font-semibold font-pathway-gothic">
            Tejas Ladhe
          </h1>
          <h2 className="text-md text-zinc-600 dark:text-zinc-300 font-light uppercase tracking-widest">
            Software Engineer
          </h2>
        </div>
      </div>
      <InfoBlock className="text-xs font-medium">
        <Link href={`mailto:${params.phone}`}>
          <InfoBlockItem value={params.email} icon={"email"} />
        </Link>
        <Link href={`tel:${params.phone}`}>
          <InfoBlockItem value={params.phone} icon={"phone"} />
        </Link>
        <Link
          target="_blank"
          href={`https://www.linkedin.com/${params.linkedin}`}
        >
          <InfoBlockItem value={params.linkedin} icon={"linkedin"} />
        </Link>
        <InfoBlockItem
          value={params.preferred_locations.join(" | ")}
          icon={"location"}
        />
      </InfoBlock>
      {/* <Image src={"/iitb-logo.png"} alt="IITB logo" width={100} height={95}/> */}
    </div>
  );
};

const SectionHeader = ({
  heading,
  type,
  className,
}: {
  heading: string;
  type?: string;
  className?: string;
}) => {
  return (
    <div className={cn("border-zinc-400/80", type !== "extracurrics" && `border-b`)}>
      <h1 className={cn("font-semibold font-mono text-lg", className)}>
        {heading}
      </h1>
    </div>
  );
};

const Section = ({ params }: { params: SectionProps }) => {
  const edu_sanitized_data = params.data as (Content & { points: Content[] })[];

  return (
    <div
      className={cn(
        "flex flex-col mb-3",
        params.type === "extracurrics" ? "space-y-0" : `space-y-2`
      )}
    >
      <SectionHeader heading={params.header} type={params.type} />

      {params.type === "education" &&
        edu_sanitized_data.map((elem, i) => (
          <div key={i} className="w-full flex flex-col space-y-2">
            <div className="w-full flex flex-col">
              <div className="flex justify-between items-center">
                <h1 className="font-bold">{elem.title}</h1>
                <h1 className="font-bold">{elem.title_right}</h1>
              </div>
              <div className="flex justify-between items-center text-xs">
                <h1 className="italic">{elem.subtitle}</h1>
                <h1>{elem.subtitle_right}</h1>
              </div>
              {elem.points.map((edu_elem: Content, j: number) => (
                <div key={j} className="w-full flex flex-col text-sm">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold">{edu_elem.title}</h1>
                    <h1 className="font-bold">{edu_elem.title_right}</h1>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <h1 className="italic">{edu_elem.subtitle}</h1>
                    <h1>{edu_elem.subtitle_right}</h1>
                  </div>
                  <ul className="list-disc pl-4 text-sm flex flex-col gap-1">
                    {edu_elem.points.map((elem: string[], k: number) => (
                      <li key={k} className="text-justify">{elem}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

      {params.type === "work_experience" &&
        edu_sanitized_data.map((elem, i) => (
          <div key={i} className="w-full flex flex-col space-y-2">
            <div className="w-full flex flex-col">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <h1 className="font-bold">{elem.title}</h1>
                  {elem.designation && <h1>&nbsp;|&nbsp;{elem.designation}</h1>}
                </div>
                <h1 className="font-bold">{elem.title_right}</h1>
              </div>
              <div className="flex justify-between items-center text-xs">
                <h1 className="italic">{elem.subtitle}</h1>
                <h1>{elem.subtitle_right}</h1>
              </div>

              <ul className="list-disc pl-4 text-sm flex flex-col gap-1">
                {elem.points.map((point: string, j: number) => (
                  <li key={j} className="text-justify">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      {params.type === "extracurrics" && (
        <div className="border-b border-zinc-400/80">
          {params.data.map((elem, i) => (
            <div
              key={i}
              className="w-full flex flex-col space-y-2 border border-zinc-400/80 border-b-0"
            >
              <div className="grid grid-cols-9 text-sm">
                <div className="px-2 py-1 col-span-1 flex flex-col items-center text-center justify-center border-r border-zinc-400/80">
                  <h1 className="font-bold text-xs">{elem.title}</h1>
                </div>
                <ul className="px-2 py-1 col-span-8 list-disc">
                  {elem.points.map(
                    (
                      point_elem: { point: string; year?: string },
                      i: number
                    ) => (
                      <li key={i} className="flex w-full justify-between pl-2">
                        {point_elem.point}
                        {point_elem.year && <p>[{point_elem.year}]</p>}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SkillSet = ({ data, className }: { data: any; className?: string }) => {
  const SkillItem = ({ value, variant }: { value: string; variant?: any }) => {
    return (
      <Badge variant={variant} className="py-2 px-3 text-xs">
        {value}
      </Badge>
    );
  };
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-1 pb-4",
        className
      )}
    >
      {Object.entries(data).map(([key, arr], i) => {
        // @ts-ignore
        return Object.values(arr).map((element, i) => (
          // @ts-ignore
          <SkillItem key={i} variant={"new"} value={element} />
        ));
      })}
    </div>
  );
};
