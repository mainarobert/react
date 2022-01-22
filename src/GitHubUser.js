import { useState, useEffect } from 'react';

const loadJSON = key => 
    key && JSON.parse(localStorage.getItem(key));
    const saveJSON = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data))
    

function MyFunc ({ login }) {
    
    const [data, setData] = useState(loadJSON(`user:${login}`));


    useEffect(() => {
        if(!data) return;
        if(data.login === login) return;
        const {name, avatar_url, location} = data;
        saveJSON(`user:${login}`, {
            name,
            login,
            avatar_url,
            location
        });
    }, [data])


/*  step 2
    After the component is rendered, the useEffect hook is invoked. This is where we make the fetch request. 
    When we get a response, we obtain and parse the data in that response as JSON. Now we can pass that JSON object to the setData function, 
    which causes our component to render once again, but this time it will have data. This useEffect hook will not be invoked again unless the value for login changes. 
    When it does, we’ll need to request more information about a different user from GitHub. 
*/
    useEffect(() => {
        if (!login) return;

        fetch(`https://api.github.com/users/${login}`)
        .then(response => response.json())
        .then(setData)
        .catch(console.error)
    }, [login]);


/*  
    When there is data, we’re rendering it as a JSON string in a pre element. 
    The JSON.stringify method takes three arguments: the JSON data to convert to a string, a replacer function that can be used to replace properties of the JSON object, 
    and the number of spaces to use when formatting the data. In this case, we sent null as the replacer because we don’t want to replace anything.
    The 2 represents the number of spaces to be used when formatting the code. This will indent the JSON string two spaces. Using the pre element honors whitespace,
    so readable JSON is what is finally rendered. 
*/
    if(data) 
        return <pre>{JSON.stringify(data, null, 2)}</pre>
    


/*  step 1
        In this code, our App renders a MyFunc component and displays JSON data about mainarobert. 
        On the first render, MyFunc sets up a state variable for data using the useState hook. 
        Then, because data is initially null, the component returns null. 
        Returning null from a component tells React to render nothing. It doesn’t cause an error; we’ll just see a black/blank screen. 
*/
    return null
}


function GitHubUser() {
    return <MyFunc login={'mainarobert'}/>
}

export default GitHubUser