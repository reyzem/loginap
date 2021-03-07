function Form({children}){
  return (
    <form className="grid my-20 mx-8 p-8 space-y-6 space-x-4 justify-items: start content-end max-w-md font-mono text-base align-middle bg-green-100 bg-opacity-50 shadow-md rounded-lg">
        {children}        
    </form>
  );
}

export default Form;
