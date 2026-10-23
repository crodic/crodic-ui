import * as React from "react";
import { Questionnaire } from "@/components/ui/questionnaire";

export default function QuestionnaireDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Questionnaire>
        <span>Questionnaire Component</span>
      </Questionnaire>
    </div>
  );
}
