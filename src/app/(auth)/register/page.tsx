import RegisterUi from "@/components/auth/RegisterUi";
import React from "react";

const Register = () => {
  return (
    <div>
      <RegisterUi
        onSubmit={() => console.log("clicked")}
        register={}
        errors={}
        isPending={true}
        showPassword={true}
        showConfirm={true}
        tooglePassword={}
        confirmPassword={}
      />
    </div>
  );
};

export default Register;
