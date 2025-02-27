const Error = ({ message }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <div className="bg-red-600 text-white p-6 rounded-md shadow-lg w-full max-w-[600px]">
        <h1 className="text-2xl font-semibold text-center">Bir Hata Oluştu</h1>
        <p className="text-center">{message}</p>
      </div>
    </div>
  );
};

export default Error;
