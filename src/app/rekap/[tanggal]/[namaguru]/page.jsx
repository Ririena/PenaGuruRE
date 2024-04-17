'use client'
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../config/supabase";
import IdGuru from "@/app/components/idguru/idguru";

export default function Page() {
 

  

  return (
    <div>
      
      <IdGuru/>
    </div>
  );
}
