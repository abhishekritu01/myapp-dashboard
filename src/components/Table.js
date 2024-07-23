import { ArrowDownTrayIcon, CalendarDateRangeIcon, FunnelIcon, MagnifyingGlassCircleIcon, PlusIcon } from "@heroicons/react/24/outline";

const people = [
    {
        asset: 'Laptop',
        code: 'A123',
        department: 'Engineering',
        dateTime: '2024-07-22 10:30 AM',
        downTime: '1 hour',
        status: 'Resolved',
        report: 'Fixed issue with UI',
    },
    {
        asset: 'Desktop',
        code: 'B456',
        department: 'Engineering',
        dateTime: '2024-07-21 02:45 PM',
        downTime: '30 minutes',
        status: 'Pending',
        report: 'Server issue',
    },
    {
        asset: 'Tablet',
        code: 'C789',
        department: 'Product',
        dateTime: '2024-07-20 09:00 AM',
        downTime: '15 minutes',
        status: 'Resolved',
        report: 'Updated product specifications',
    },
    {
        asset: 'Monitor',
        code: 'D012',
        department: 'Design',
        dateTime: '2024-07-19 04:30 PM',
        downTime: '45 minutes',
        status: 'In Progress',
        report: 'Design review meeting',
    },
    {
        asset: 'Server',
        code: 'E345',
        department: 'Operations',
        dateTime: '2024-07-18 11:15 AM',
        downTime: '2 hours',
        status: 'Resolved',
        report: 'Deployed new CI/CD pipeline',
    },
];

  
  export default function Example() {
    return (
      <div className="px-4 sm:px-6 lg:px-8">

           <div className="sm:flex sm:items-center border p-2 py-4">
  <div className="relative sm:flex-auto border flex items-center space-x-4  ">
    {/* <MagnifyingGlassCircleIcon className="absolute left-2 h-5 w-5 text-gray-500" aria-hidden="true" /> */}
    <input 
      type="text" 
      className="pl-10 w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
      placeholder="Search Incidents" 
    />
    <ArrowDownTrayIcon className="h-5 w-5 text-gray-500 ml-2" aria-hidden="true" />
    <CalendarDateRangeIcon className="h-5 w-5 text-gray-500 ml-2" aria-hidden="true" />
    <FunnelIcon className="h-5 w-5 text-gray-500 ml-2" aria-hidden="true" />
  </div>
  <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex items-center">
    <button
      type="button"
      className="flex items-center space-x-2 rounded-full bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <span>Add Incident</span>
      <PlusIcon className="h-5 w-5 inline-block" aria-hidden="true" />
    </button>
  </div>
</div>





  
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Asset
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Code
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Deparment
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Date & Time
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                       Down Time
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                       Status
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                       Report
                      </th>
                      {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        download
                      </th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.code}>
                        <td className="pl-4 pr-3 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900 sm:pl-6">
                          {person.asset}
                        </td>
                        <td className="px-3 py-3.5 whitespace-nowrap text-sm text-gray-500">
                          {person.code}
                        </td>
                        <td className="px-3 py-3.5 whitespace-nowrap text-sm text-gray-500">
                          {person.department}
                        </td>
                        <td className="px-3 py-3.5 whitespace-nowrap text-sm text-gray-500">
                          {person.dateTime}
                        </td>
                        <td className="px-3 py-3.5 whitespace-nowrap text-sm text-gray-500">
                          {person.downTime}
                        </td>
                        <td className="px-3 py-3.5 whitespace-nowrap text-sm text-gray-500">
                          {/* {person.status} */}
                          <button className="px-2 py-1 text-xs font-semibold leading-6 text-green-800 bg-green-100 rounded-full">
                            {person.status}
                            </button>
                          
                        </td>
                        {/* <td className="px-3 py-3.5 whitespace-nowrap text-sm text-gray-500">
                          {person.report}
                        </td> */}
                        <td className="pl-3 pr-4 py-3.5 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  