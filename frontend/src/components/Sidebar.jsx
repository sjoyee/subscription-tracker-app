import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../services/auth";

const Sidebar = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const isActive = (inputPath) => {
    return inputPath === pathname;
  };

  return (
    <div>
      <div className="fixed inline-block top-0 bottom-0 left-0 right-0">
        <div className="h-full">
          <div className="flex flex-col h-full w-20 md:w-52 border-r shadow-xl p-6 justify-between">
            <div>
              <div className="pb-4 md:flex hidden">
                <img src="/img/logo.png" className="text-black w-48"></img>
              </div>
              <div className="pb-4 md:hidden">
                <img
                  src="/img/logo-only.png"
                  className="text-black w-full"
                ></img>
              </div>

              <div className="flex flex-row">
                <div className="text-gray-500 text-sm md:flex hidden">
                  DASHBOARD
                </div>
              </div>
              <div className="py-2"></div>
              <button
                onClick={() => {
                  navigate("/");
                }}
                className={
                  isActive("/")
                    ? "flex flex-row font-bold fill-gray-400 stroke-2"
                    : "flex flex-row hover:font-bold fill-none hover:fill-gray-400 stroke-[1.5] hover:stroke-2"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="auto"
                  viewBox="0 0 24 24"
                  strokeWidth="auto"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <div className="mx-4 md:flex hidden">Overview</div>
              </button>
              <div className="py-2"></div>
              <button
                onClick={() => {
                  navigate("/subscription");
                }}
                className={
                  isActive("/subscription")
                    ? "flex flex-row font-bold fill-gray-400 stroke-2"
                    : "flex flex-row hover:font-bold fill-none hover:fill-gray-400 stroke-[1.5] hover:stroke-2"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="auto"
                  viewBox="0 0 24 24"
                  strokeWidth="auto"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>
                <div className="mx-4 md:flex hidden">Subscription</div>
              </button>
              <div className="py-2"></div>
              <button
                onClick={() => {
                  navigate("/freetrial");
                }}
                className={
                  isActive("/freetrial")
                    ? "flex flex-row font-bold fill-gray-400 stroke-2"
                    : "flex flex-row hover:font-bold fill-none hover:fill-gray-400 stroke-[1.5] hover:stroke-2"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="auto"
                  viewBox="0 0 24 24"
                  strokeWidth="auto"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>

                <div className="mx-4 md:flex hidden">Free Trial</div>
              </button>
              <div className="py-2 border-b-2"></div>
              <div className="py-2"></div>
              <div className="flex flex-row">
                <div className="text-gray-500 text-sm md:flex hidden">
                  ACCOUNT
                </div>
              </div>
              <div className="py-2"></div>
              <button
                onClick={() => {
                  navigate("/settings");
                }}
                className={
                  isActive("/settings")
                    ? "flex flex-row font-bold fill-gray-400 stroke-2"
                    : "flex flex-row hover:font-bold fill-none hover:fill-gray-400 stroke-[1.5] hover:stroke-2"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="auto"
                  viewBox="0 0 24 24"
                  strokeWidth="auto"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <div className="mx-4 md:flex hidden">Settings</div>
              </button>
            </div>
            <div className="py-4">
              <button
                onClick={() => {
                  logout();
                }}
                className="flex flex-row hover:font-bold fill-none hover:fill-gray-400 stroke-[1.5] hover:stroke-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="auto"
                  viewBox="0 0 24 24"
                  strokeWidth="auto"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
                <div className="mx-4 md:flex hidden">Logout</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
