import React from "react";
import { Button, TextField } from "@mui/material";

const RegisterForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="username"
        value={values.username}
        onChange={handleChange}
        label="User Name"
        onBlur={handleBlur} // kullanıcının input alanından ayrıldığını yakalayan event.
        error={touched.username && errors.username} // validation'da verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için errors dan gelen mesajı yakalıyoruz.
        helperText={touched.username && errors.username} // validation'da verdiğimiz kalıba uymazsa rengi errora çevirmesi için error attribute'ı bizden false/true degeri bekliyor, ondan dolayı daha sağlıklı olması için boolean deger döndürüyoruz.
        // touched'da kullanıcının inputa tıklayıp tıklamadığını yakalıyor.
        variant="outlined"
        fullWidth
        type="text"
        margin="normal"
      />

      <TextField
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        label="First Name"
        onBlur={handleBlur}
        error={touched.firstName && errors.firstName}
        helperText={touched.firstName && errors.firstName}
        variant="outlined"
        fullWidth
        type="text"
        margin="normal"
      />

      <TextField
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        label="Last Name"
        onBlur={handleBlur}
        error={touched.lastName && errors.lastName}
        helperText={touched.lastName && errors.lastName}
        variant="outlined"
        fullWidth
        type="text"
        margin="normal"
      />

      <TextField
        name="email"
        value={values.email}
        onChange={handleChange}
        label="Email"
        onBlur={handleBlur}
        error={touched.email && errors.email}
        helperText={touched.email && errors.email}
        variant="outlined"
        fullWidth
        type="email"
        margin="normal"
      />

      <TextField
        name="password"
        value={values.password}
        onChange={handleChange}
        label="Password"
        onBlur={handleBlur}
        error={touched.password && errors.password}
        helperText={touched.password && errors.password}
        variant="outlined"
        fullWidth
        type="password"
        margin="normal"
      />

      <Button type="submit" variant="contained" fullWidth margin="normal">
        SUBMIT
      </Button>
    </form>
  );
};

export default RegisterForm;
