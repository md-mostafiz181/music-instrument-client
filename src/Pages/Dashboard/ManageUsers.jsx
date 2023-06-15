
import Swal from "sweetalert2";
import useUser from "../../Hooks/useUser";

const ManageUsers = () => {
  const [users,refetch,isLoading,isError]=useUser();

  const handleAdmin = (user) => {
    fetch(`https://music-learning-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          // alert("Successfully updated user role to admin");
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Updated role user to admin.',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch((error) => {
        console.error("Failed to update user role to admin", error);
      });
  };

  const handleInstructor = (user) => {
    fetch(`https://music-learning-server.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          // alert("Successfully updated user role to instructor");

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Updated role user to instructor.',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch((error) => {
        console.error("Failed to update user role to instructor", error);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: Failed to fetch users</p>;
  }

  return (
    <div className="w-full">
      <h3 className="text-3xl font-bold py-5 text-center uppercase font-popins ">
        Total Users : {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full font-bold text-1xl">
          <thead className="bg-slate-200 font-bold">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
         
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="font-semibold">
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleAdmin(user)}
                      className="btn btn-primary text-white hover:bg-blue-700 btn-shadow border-0 rounded mr-5"
                    >
                       Admin
                    </button>
                  )}
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button
                      onClick={() => handleInstructor(user)}
                      className="btn ml-5 btn-primary text-white hover:bg-blue-700 btn-shadow border-0 rounded"
                    >
                      Instructor
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;