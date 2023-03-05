enum TPosition {
  "project manager" = "project manager",
  designer = "designer",
  developer = "developer",
  engineer = "engineer",
  tester = "tester",
}

enum TCompany {
  actum = "actum",
  google = "google",
  jetbrains = "jetbrains",
  veeam = "veeam",
  yandex = "yandex",
}

interface TAvatar {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface TEmployee {
  avatar: TAvatar;
  company: TCompany;
  email: string;
  isOnline: boolean;
  name: string;
  position: TPosition;
  slug: string;
}
