export class Wanted {
    header: string;
    mke: string;
    oai: string;
    name: string;
    sex: string;
    race: string;
    height: string;
    weight: string;
    hair: string;
    offense: string;
    violationDate: string;
    driversLicense: string;
    dlState: string;
    dlExpiration: string;
    licensePlate: string;
    licenseState: string;
    licenseYear: string;

    constructor(
        header: string,
        mke: string,
        oai: string,
        name: string,
        sex: string,
        race: string,
        height: string,
        weight: string,
        hair: string,
        offense: string,
        violationDate: string,
        driversLicense: string,
        dlState: string,
        dlExpiration: string,
        licensePlate: string,
        licenseState: string,
        licenseYear: string
    ) {
      this.header = header;
      this.mke = mke;
      this.oai = oai;
      this.name = name;
      this.sex = sex;
      this.race = race;
      this.height = height;
      this.weight = weight;
      this.hair = hair;
      this.offense = offense;
      this.violationDate = violationDate;
      this.driversLicense = driversLicense;
      this.dlState = dlState;
      this.dlExpiration = dlExpiration;
      this.licensePlate = licensePlate;
      this.licenseState = licenseState;
      this.licenseYear = licenseYear;
    }
  }