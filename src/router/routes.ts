export const publicRoutes = {
  homeRoute: "/",
  auth: {
    index: "/auth/*",
    signInRoute: "sign-in",
    signInPath: "/auth/sign-in",
    signUpRoute: "sign-up/*",
    signUpPath: "/auth/sign-up",
    signUpDetailsRoute: "details",
    signUpDetailsPath: "/auth/sign-up/details",
    signUpDescriptionRoute: "description",
    signUpDescriptionPath: "/auth/sign-up/description",
    signUpProfileRoute: "profile",
    signUpProfilePath: "/auth/sign-up/profile",
  },
};

export const companyRoutes = {
  index: "/my-company",
  recruiters: {
    index: "/my-company/recruiters/*",
    administrationRecruiterRoute: "/administration",
    administrationRecruiterPath: "/my-company/recruiters/administration",
  },
};
