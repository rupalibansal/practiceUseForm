import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const YouTubeForm = () => {
  const form = useForm<FormValues>({
    // preload the values:

    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      return {
        username: "Batman",
        email: data.email,
        channel: "",
      };
    },
    // defaultValues: {
    //   username: "Batman",
    //   email: "",
    //   channel: "",
    // },
  });
  console.log(form);
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  console.log(register("username"));
  //   const { name, ref, onChange, onBlur } = register("username");

  type FormValues = {
    username: string;
    email: string;
    channel: string;
    social: {
      twitter: string;
      facebook: string;
    };
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />
        <p className="errors">{errors.username?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email format",
            },
            validate: (fieldValue) => {
              return (
                fieldValue !== "admin@example.com" || "Enter a different email"
              );
            },
          })}
        />
        <p className="errors"> {errors.email?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          {...register("channel", {
            required: { value: true, message: "Channel is required" },
          })}
        />
        <p className="errors">{errors.channel?.message}</p>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YouTubeForm;
