import './App.css'

function App() {
  
  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='bg-blue-500 col-span-4'>
          child1
        </div>
        <div className='bg-red-400 col-span-6'>
          child2
        </div>
        <div className='bg-violet-500 col-span-2'>
          child3
        </div>
      </div>
    </>
  )
}

export default App
