import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const stats = [
    { name: 'Incidents Report', stat: '04' },
    { name: 'Check IN', stat: '06' },
    { name: 'Service Open', stat: '03/05' },
  ]
  
const Stats =() => {
    return (
      <div className="p-8">
        {/* <h3 className="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3> */}
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-indigo-500">{item.stat}</dd>
              {/* <dt className="truncate text-xl font-medium py-2  text-zinc-900">{item.name}</dt> */}
              <div className="flex justify-between item-center">
              <dt className="truncate text-xl font-medium py-2  text-zinc-900">{item.name}</dt>
              <ArrowRightCircleIcon className="h-5 w-5 text-gray-700 mt-2 right-0" aria-hidden="true" />
              </div>
            </div>
          ))}
        </dl>
      </div>
    )
  }
export default Stats;
  