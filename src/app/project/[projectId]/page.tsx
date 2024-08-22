"use client"
import React, { useEffect, useState } from 'react';
import { Project, projects } from "@/api/data";
import { Bars, Hearts } from 'react-loader-spinner';
import { ProjectDetails } from '@/components/Projects/Project';
import { NavbarWrapper } from '@/components/Navbar/NavbarWrapper';
import { Navbar } from '@/components/Navbar/Navbar';
import { MoreWorkWrapper } from '@/components/Projects/MoreWork';
import { Footer } from '@/components/Footer/Footer';
import { Metadata } from 'next';




type ProjectProps = {
    params: { projectId: string }
}

const ProjectPage = ({ params }: ProjectProps) => {
    const [project, setProject] = useState<Project>({
        content: "",
        title: "",
        subHeading: "",
        skills: []
    });

    useEffect(() => {
        const filteredProject = projects.filter((project) => project.title.toLowerCase() === params.projectId);
        if (filteredProject.length === 0) {
            setTimeout(() => {

                alert("Project Does Not Exist");
                setProject({
                    content: "",
                    title: "Not Found",
                    subHeading: "",
                    skills: []
                });
            }, 1000);

            return;
        }
        else {
            setTimeout(() => setProject(filteredProject[0]), 1000);

        }
    }, []);

    return (
        <>
            <h1 id="error" ></h1>
            {
                project?.title == "" ?
                    <div className='h-screen w-full flex items-center justify-center bg-[#11091b] ' >
                        <Hearts
                            height="80"
                            width="80"
                            color="#ed5cbd"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                    : <>
                        <NavbarWrapper isHome={true} />
                        <Navbar />
                        <ProjectDetails content={project.content!} title={project.title} subHeading={project.subHeading} skills={project.skills} />
                        <MoreWorkWrapper />
                        <Footer />
                    </>
            }

        </>
    )
};

export default ProjectPage;