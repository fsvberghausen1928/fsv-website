import Image from "next/image";


interface StaffCardProps {
  staff: {
    name: string;
    role: string;
    image?: string;
    description?: string;
  };
}



export default function StaffCard({
  staff,
}: StaffCardProps) {

  return (
    <article className="overflow-hidden rounded-lg border bg-white">


      {staff.image && (

        <div className="relative h-64 w-full">

          <Image
            src={staff.image}
            alt={staff.name}
            fill
            className="object-cover"
          />

        </div>

      )}






      <div className="p-6">


        <h3 className="text-xl font-bold text-gray-900">
          {staff.name}
        </h3>



        <p className="mt-2 font-medium text-blue-700">
          {staff.role}
        </p>





        {staff.description && (

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            {staff.description}
          </p>

        )}


      </div>


    </article>
  );
}