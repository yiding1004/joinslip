"use client";

import { ReactNode, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import useCreateModal from "@/app/hooks/useCreateModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import axios from "axios";
import toast from "react-hot-toast";
import FieldInput from "../inputs/FieldInput";
import SwitchInput from "../inputs/SwitchInput";
import CubeInput from "../inputs/CubeInput";


import { AtSymbolIcon } from '@heroicons/react/24/outline';
import { IdentificationIcon } from '@heroicons/react/24/outline';
import { UsersIcon } from '@heroicons/react/24/outline';
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { BuildingLibraryIcon } from '@heroicons/react/24/outline';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { CalculatorIcon } from '@heroicons/react/24/outline';


enum STEPS {
  TITLE = 0,
  DESCRIPTION = 1,
  INFO = 2,
}

export interface fieldType {
  [key: string]: any;
}

export const fields: fieldType[] = [
  {
    id: "email",
    label: 'Email',
    icon: <AtSymbolIcon />,
    description: 'This property is close to the beach!',
  },
  {
    id: "firstName",
    label: 'First Name',
    icon: <IdentificationIcon />,
    description: 'This property is has windmills!',
  },
  {
    id: "lastName",
    label: 'Last Name',
    icon: <UsersIcon />,
    description: 'This property is modern!'
  },
  {
    id: "phone",
    label: 'Phone',
    icon: <PhoneIcon />,
    description: 'This property is in the countryside!'
  },
  {
    id: "street",
    label: 'Street',
    icon: <BuildingStorefrontIcon />,
    description: 'This is property has a beautiful pool!'
  },
  {
    id: "city",
    label: 'City',
    icon: <BuildingOffice2Icon />,
    description: 'This property is on an island!'
  },
  {
    id: "state",
    label: 'State',
    icon: <BuildingLibraryIcon />,
    description: 'This property is near a lake!'
  },
  {
    id: "country",
    label: 'Country',
    icon: <GlobeAltIcon />,
    description: 'This property is near a lake!'
  },
  {
    id: "zip",
    label: 'Zip',
    icon: <MapPinIcon />,
    description: 'This property is near a lake!'
  },
  {
    id: "dateOfBirth",
    label: 'Date of Birth',
    icon: <CalculatorIcon />,
    description: 'This property is near a lake!'
  }
];

const CreateModal = () => {
  const router = useRouter();
  const createModal = useCreateModal();

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.TITLE);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      newMemberAllowed: true,
      memberEditable: true,
      description: "",
      passCode: "",
      requirements: {
        email: false,
        firstName: false,
        lastName: false,
        phone: false,
        street: false,
        city: false,
        state: false,
        country: false,
        zip: false,
        dateOfBirth: false,
      }
    },
  });

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: value,
      shouldTouch: value,
      shouldValidate: value
    })
  }

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.INFO) {
      return onNext();
    }

    setIsLoading(true);

    axios
      .post("/api/rosters", data)
      .then(() => {
        toast.success("Roster  Created!");
        router.refresh();
        reset();
        setStep(STEPS.TITLE);
        createModal.onClose();
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return "Create";
    }

    return "Next";
  }, [step]);


  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.TITLE) {
      return undefined
    }

    return 'Back'
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading center title="What kind of roster?" />
      <div
        className="
          grid 
          grid-cols-1  
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        <FieldInput id="title" label="Title" register={register} errors={errors} required />
        <SwitchInput
          id="newMemberAllowed"
          register={register}
          enabledLabel="New Member Allowed"
          disabledLabel="New Member Not Allowed"
        />
        <SwitchInput
          id="memberEditable"
          register={register}
          enabledLabel="Member Edit Allowed"
          disabledLabel="Member Edit Not Allowed"
        />
      </div>
    </div>
  );

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="More details about your roster"
          center
        />
        <FieldInput id="description" label="Description" register={register} errors={errors} textarea/>
        <FieldInput id="passCode" label="Passcode" register={register} errors={errors}/>
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="What information you need collect?"
          center
        />
        <div 
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {fields.map((field) => (
          <div key={field.id} className="col-span-1">
            <CubeInput
              onClick={(isClicked) => setCustomValue(`requirements.${field.id}`, isClicked)}
              selected={watch(`requirements.${field.id}`)}
              label={field.label}
              icon={field.icon}
            />
          </div>
        ))}
      </div>
        
      </div>
    );
  }


  return (
    <Modal
      disabled={isLoading}
      isOpen={createModal.isOpen}
      title="Create New Roster!"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.TITLE ? undefined : onBack}
      onClose={createModal.onClose}
      body={bodyContent}
    />
  );
};

export default CreateModal;
