import ndx from "../public/ndx.json"
import { useEffect } from "react";
import autoComplete from "@tarekraafat/autocomplete.js"

export default function Search() {

    const widget = ()=>{
        const name = document.getElementById('autoComplete').value;
        const symbol = ndx[name]
        window.location.replace(`/${symbol}`)
    }
    useEffect(()=>{
        const autoCompleteJS = new autoComplete({
          selector: "#autoComplete",
          placeHolder: "Search for stocks...",
          data: {
              src: Object.keys(ndx),
              cache: true,
          },
          resultsList: {
              element: (list, data) => {
                  if (!data.results.length) {
                      // Create "No Results" message element
                      const message = document.createElement("div");
                      // Add class to the created element
                      message.setAttribute("class", "no_result");
                      // Add message text content
                      message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                      // Append message element to the results list
                      list.prepend(message);
                  }
              },
              noResults: true,
          },
          resultItem: {
              highlight: true
          },
          events: {
              input: {
                  selection: (event) => {
                      const selection = event.detail.selection.value;
                      autoCompleteJS.input.value = selection;
                  }
              }
          }
        });
      },[])

    return (
        <>
            <p>
                <input id="autoComplete" type="search" dir="ltr" spellCheck={false} autoCorrect="off" autoComplete="off" autoCapitalize="off" maxLength="2048" tabIndex="1" />
            </p>
            <p><button type="button" className="w3-button w3-red" onClick={widget}>SEARCH</button></p>
        </>
    )
}
