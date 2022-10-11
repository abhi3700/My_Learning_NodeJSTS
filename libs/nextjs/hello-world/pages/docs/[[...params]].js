import { useRouter } from "next/router";

export default function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  } else if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} concept {params[1]}
      </h1>
    );
  } else if (params.length === 3) {
    return (
      <h1>
        Viewing docs for feature {params[0]} concept {params[1]} example{" "}
        {params[2]}
      </h1>
    );
  }
  // this won't run, instead it would show "Docs Home Page"
  else {
    console.error("Error 404");
  }
  return <h1>Docs Home Page </h1>;
}
