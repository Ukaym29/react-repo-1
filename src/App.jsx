import { useState } from "react";
import CoreConcept from "./Components/CoreConcept";
import Header from "./Components/Header"
import TabButton from "./Components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
// import { useState } from "react";


function App() {

  const [selectedTopic, setSelectedTopic] = useState(false);

  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>

            {
              //  we are mapping through the array using the props values from our array
              CORE_CONCEPTS.map(concept => {
                //  we are returning  the component " CoreConcept" and also ensuring to pass our key prop #very important.
                return <CoreConcept
                  key={concept.title}
                  image={concept.image}
                  title={concept.title}
                  description={concept.description} />

              })

            }
          </ul>
        </section>
        {/* <h2>Time to get started!</h2> */}

        <section id="examples">

          <h2>
            Examples
          </h2>

          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => setSelectedTopic('components')}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => setSelectedTopic('props')}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => setSelectedTopic('jsx')}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => setSelectedTopic('state')}>
              State
            </TabButton>
          </menu>

          {
            selectedTopic ? (
              <div id="tab-content">
                <h3>
                  {EXAMPLES[selectedTopic].title}
                </h3>
                <p>
                  {EXAMPLES[selectedTopic].description}
                </p>
                <pre>
                  <code>
                    {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </div>
            ) : (
              <p> Please select a topic. </p>
            )

          }


        </section>

      </main>

    </div>
  );
}

export default App;
