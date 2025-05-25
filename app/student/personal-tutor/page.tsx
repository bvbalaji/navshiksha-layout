import PersonalTutor from '@/components/student/personal-tutor';

const PersonalTutorPage = () => {
  return (
    <div className="w-full px-0 mx-0"> {/* Full width, no padding/margin */}
      <h1 className="text-2xl font-bold mb-4 px-4">Personal Tutor</h1>
      <PersonalTutor />
    </div>
  );
};

export default PersonalTutorPage;