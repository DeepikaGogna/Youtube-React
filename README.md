Install Visual studio code extention for shortcuts
ES7 React/Redux/GraphQL/React-Native snippets
write rafce it will create a bolerplate for compoent


Stores
Install the Redux Tollkit 
Create store.js 
Create appSlice.js
in App.js <Provider store={store}> (Provide a store to aour app)
Through Browser extenstion we can check store is working or not
Onlick Button we are calling slice we need to use the useDispatch Hook for calling any slice function
Get the store/slice value using useSelector

call the Youtube APIs
https://developers.google.com/youtube/v3/docs/videos/list
create constant for url and call the api using useEffect hook
useEfeect(() => {
},[]) // [] call it once

install react router dom
CreateBrowser Router function in app.js for routing
const appRputer = createBrowserRouter([{
    path:'',
    element:Component name
}])


Create a Higher order function
A function which takes a container and return the same container in the function

When we need to use Higher order fxn
i want to do some modification in videCardContrainer and retunr videocardContainer. example i want border in videoContainer
eg: const fn = (VideoCard) => {
    <Videocard/>
}


Now we are using Debouncing for search bar
typeSlow = 200ms
typeFast = 30ms

Performance
-iphone pre max= 14 letter * 1000 = 14000
- with debouncing 3 api calls * 1000 = 3000

Debouncing with 200ms
- If difference with 2 keys strokes is <200ms - Decline API call
- 200ms > make an api call

- Key - i (call the api after 200ms)
rendedr the component
useEffecct()
start timer ==> make api call after 200ms

key- ip (if user enter another key within 200ms it will destroy the component and start this call after 200ms so api will call ip key not in i)
destroy the component (useEffect rreturn method calling clearTimeOut)
re-render the component
useEffect()
start timer ==> make api call after 200ms

Used Recursive for Comments


Live Chat
Web Socket --> handshaking UI--><--Server --> No Interval (If we want real data like Whatsapp, Trading Apps)
API Polling --> UI-->Server -->Interval (eg if we want some data in 10 second not real time data required we can wait for 10 seconds like gmail, cricbuzz)