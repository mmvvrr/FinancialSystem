import ReactQueryProvider from "@/components/ReactQueryProvider";
import {Splitter, SplitterPanel} from "primereact/splitter";
import {SideMenuContainer} from "@/components/layout/SideMenu"
import {ScrollPanel} from "primereact/scrollpanel";
import {Suspense} from "react";
import Loading from "@/app/analytics/loading";

export default function Layout({ children }) {

  return (
    <div>
      <Splitter className='flex h-screen'>
        <SplitterPanel minSize={5} size={15}>
          <ReactQueryProvider>
            <SideMenuContainer/>
          </ReactQueryProvider>
        </SplitterPanel>
        <SplitterPanel minSize={85} size={100}>
          <div className='w-full'>
            <ScrollPanel style={{height: '99vh'}}>
              <Suspense fallback={<Loading/>}>
                <ReactQueryProvider>
                  {children}
                </ReactQueryProvider>
              </Suspense>
            </ScrollPanel>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>
  );
}
