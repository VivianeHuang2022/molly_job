class Resume {
  constructor(
    lastUpdated,
    personalInfo,
    educationInfo,
    workExperience,
    projectExperience,
    researchExperience,
    publicationsPresentations,
    skillsActivitiesInterests,
    history = []
  ) {
    this.lastUpdated = lastUpdated;
    this.personalInfo = personalInfo;
    this.educationInfo = educationInfo;
    this.workExperience = workExperience;
    this.projectExperience = projectExperience;
    this.researchExperience = researchExperience;
    this.publicationsPresentations = publicationsPresentations;
    this.skillsActivitiesInterests = skillsActivitiesInterests;
    this.history = history;
  }

  toJSON() {
    return {
      lastUpdated: this.lastUpdated,
      personalInfo: this.personalInfo,
      educationInfo: this.educationInfo,
      workExperience: this.workExperience,
      projectExperience: this.projectExperience,
      researchExperience: this.researchExperience,
      publicationsPresentations: this.publicationsPresentations,
      skillsActivitiesInterests: this.skillsActivitiesInterests,
    };
  }

  updateField(sectionName, title, newValue) {
    const timestamp = new Date().toISOString();
    const historyEntry = new HistoryEntry(timestamp, this[sectionName][title]);
    this.history.push(historyEntry);

    // 创建一个新的简历对象，而不直接修改只读属性
    const updatedSection = {
      ...this[sectionName],
      [title]: newValue,
    };

    const updatedResume = {
      ...this,
      [sectionName]: updatedSection,
    };

    // 返回更新后的简历对象
    return updatedResume;
  }
}

class HistoryEntry {
  constructor(timestamp, data) {
    this.timestamp = timestamp;
    this.data = data;
  }
}

export default Resume;
